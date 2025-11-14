'use client'

import { useState, useContext, useMemo } from "react";
import Modal from "../../../components/Modal";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Label from "../../../components/Label";
import InlineTags from "../../../components/InlineTags";
import { mockCoursesList } from "../../../coursesMock";
import { ContentContext } from "../../../context/ContentContext";
import usePostCourseHook from '../../../hooks/usePostCourseHook';
import usePatchCourseHook from '../../../hooks/usePatchCourseHook';
import checkListsEquality from '../../../utils/checkListsEquality';
import Hint from '../../../components/Hint';

export default function FormModal({
  onClose,
  mode,
  itemId,
  ...props
}) {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseImg, setCourseImg] = useState(undefined);
  const [courseTags, setCourseTags] = useState([]);
  const [singleTagInput, setSingleTagInput] = useState('');
  const [courseLink, setCourseLink] = useState('');
  const [isDataFilled, setIsDataFilled] = useState(false);
  const { courses } = useContext(ContentContext);

  const isEditionForm = (mode === 'edit');
  const allRequiredAreFilled = (
    courseTitle
    && courseDescription
    && !!courseTags.length
    && courseLink
  );
  const courseBeingEdited = itemId ? courses.data.find(course => course.id === itemId) : {};
  const splittedCourseTags = courseBeingEdited?.tags?.toString().split(',');

  const getModifiedFields = () => {
    const modifiedFields = [];
    const courseTagsHasChanged = !checkListsEquality(splittedCourseTags, courseTags);

    Object.entries(courseBeingEdited).forEach(([key, originalValue]) => {
      switch (key) {
        case 'title':
          if (courseTitle !== originalValue) modifiedFields.push([key, courseTitle]);
          break;
        case 'description':
          if (courseDescription !== originalValue) modifiedFields.push([key, courseDescription]);
          break;
        case 'tags':
          if (courseTagsHasChanged) modifiedFields.push([key, courseTags]);
          break;
        case 'link':
          if (courseLink !== originalValue) modifiedFields.push([key, courseLink]);
          break;
      }
    })

    return (
      modifiedFields.length 
        ? Object.fromEntries(modifiedFields)
        : null
    );
  }

  const onCreateCourse = async () => {
    if (!allRequiredAreFilled) {
      window.alert('>:(');
      return;
    }

    const result = await usePostCourseHook({
      title: courseTitle,
      description: courseDescription,
      tags: courseTags,
      link: courseLink,
    })

    if (result.hasError) {
      console.log(result.error)
      return;
    };
    
    courses.refreshData();
    onClose();
  }

  const onEditCourse = async () => {
    const modifiedFields = getModifiedFields();
    if (!modifiedFields) return;
    if (!allRequiredAreFilled) {
      window.alert('>:(');
      return;
    }

    const result = await usePatchCourseHook(modifiedFields, itemId);

    if (result.hasError) {
      console.log(result.error)
      return;
    };

    courses.refreshData();
    onClose();
  }

  const onTagPop = (tagIndex) => {
    const newTags = [...courseTags];
    newTags.splice(tagIndex, 1);
    setCourseTags(newTags);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isEditionForm) {
      onEditCourse(event);
      return;
    }
    onCreateCourse(event);
  }

  const handleTagsInputOnChange = (event) => {
    event.preventDefault();
    const typedText = event.target.value;

    if (!typedText.trim() && !singleTagInput) return;

    setSingleTagInput(typedText);
  }

  const handleEnterKeyDown = (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    
    if (!singleTagInput) return;
    setCourseTags((previous) => [...previous, singleTagInput]);
    setSingleTagInput('');
  }

  if (isEditionForm && !isDataFilled) {
    if (!courseBeingEdited) return;

    setCourseTitle(courseBeingEdited.title);
    setCourseDescription(courseBeingEdited.description);
    if (courseBeingEdited.img) setCourseImg(courseBeingEdited.img);
    setCourseTags(splittedCourseTags);
    setCourseLink(courseBeingEdited.link);
    setIsDataFilled(true);
  }

  return (
    <Modal
      className='bg-white w-[50%] max-sm:w-[95%]'
      onClose={onClose}
    >
      <Form 
        onSubmit={handleSubmit}
        className='w-[70%] max-sm:w-[90%] ml-auto mr-auto'
      >
        <div className="pb-5 font-bold text-lg flex">
          <h1>{isEditionForm ? 'Editar Curso' : 'Novo Curso'}</h1>
        </div>
        <div className='flex flex-col gap-4'>
          <div>
            <Label text='Título' htmlFor='course-title' required />
            <Input 
              value={courseTitle}
              onChange={(event) => setCourseTitle(event.target.value)}
              id='course-title'
            />
          </div>
          <div>
            <Label text='Descrição' htmlFor='course-title' required />
            <Input 
              value={courseDescription}
              onChange={(event) => setCourseDescription(event.target.value)}
              id='course-description'
            />
          </div>
          <div className="flex flex-col mb-1">
            <Label text='Tags' htmlFor='course-tags' required />
            <Input 
              value={singleTagInput}
              onChange={(event) => handleTagsInputOnChange(event)}
              onKeyDown={(event) => handleEnterKeyDown(event)}
              id='course-tags'
            />
            <Hint
              text='Press enter to save the typed tag' 
              className='-mt-1'
            />
            {
              !!courseTags.length &&
                <InlineTags
                  items={courseTags}
                  onClick={onTagPop}
                  className='mt-2'
                  editionEnabled 
                />
            }
          </div>
          <div>
            <Label text='Link do Curso' htmlFor='course-title' required />
            <Input 
              value={courseLink}
              onChange={(event) => setCourseLink(event.target.value)}
              id='course-link'
            />
          </div>
        </div>
        <Button 
          type='submit'
          label='Salvar'
          className='bg-cyan-800 text-white max-w-20 ml-auto mr-auto mt-2'
        />
      </Form>
    </Modal>
  )
}