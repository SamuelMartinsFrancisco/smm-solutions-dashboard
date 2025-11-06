import Modal from "@/components/Modal";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Label from "@/components/Label";
import InlineTags from "@/components/InlineTags";
import { mockCoursesList } from "@/coursesMock";
import { useState } from "react";

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
  const isEditionForm = (mode === 'edit');
  const [isDataFilled, setIsDataFilled] = useState(false);
  const allRequiredAreFilled = (
    courseTitle
    && courseDescription
    && courseTags
    && courseLink
  );

  debugger

  const onCreateCourse = (event) => {
    window.alert('Course creation form');
  }

  const onEditCourse = (event) => {
    window.alert('Course edition form: ' + courseTitle);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!allRequiredAreFilled) {
      window.alert('>:(');
      return;
    }

    if (isEditionForm) {
      onEditCourse();
      return;
    }

    onCreateCourse();
  }

  const handleTagsInputOnChange = (event) => {
    const typedText = event.target.value;

    if (!typedText.trim() && !singleTagInput) return;

    setSingleTagInput(typedText);
  }

  const handleEnterKeyDown = (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    
    if (!singleTagInput) return;
    debugger
    setCourseTags((previous) => [...previous, singleTagInput]);
    setSingleTagInput('');
    debugger
  }

  if (isEditionForm && !isDataFilled) {
    const courseBeingEdited = mockCoursesList.find(course => course.id === itemId);
    if (!courseBeingEdited) return;

    setCourseTitle(courseBeingEdited.title);
    setCourseDescription(courseBeingEdited.description);
    if (courseBeingEdited.img) setCourseImg(courseBeingEdited.img);
    setCourseTags(courseBeingEdited.tags.toString().split(','));
    setCourseLink(courseBeingEdited.link);
    setIsDataFilled(true);
  }

  return (
    <Modal
      className='bg-white w-[50%]'
      onClose={onClose}
    >
      <Form 
        onSubmit={handleSubmit}
        className='w-[70%] ml-auto mr-auto'
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
            <InlineTags 
              items={courseTags} 
            />
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