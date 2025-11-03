import Modal from "@/components/Modal";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Label from "@/components/Label";
import { mockCoursesList } from "@/coursesMock";
import { useState } from "react";
import { EditPencil } from "iconoir-react";

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
  const [courseLink, setCourseLink] = useState('');
  const isEditionForm = (mode === 'edit');
  const [isDataFilled, setIsDataFilled] = useState(false);

  const onCreateCourse = () => {
    window.alert('Course creation form');
  }

  const onEditCourse = () => {
    window.alert('Course edition form: ' + courseTitle);
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
        onSubmit={
          isEditionForm 
          ? onEditCourse
          : onCreateCourse
        }
        className='w-[70%] ml-auto mr-auto'
      >
        <div className="pb-5 font-bold text-lg flex">
          <h1>{isEditionForm ? 'Editar Curso' : 'Novo Curso'}</h1>
        </div>
        <Label text='Título' htmlFor='course-title' required />
        <Input 
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
          id='course-title'
        />
        <Label text='Descrição' htmlFor='course-title' required />
        <Input 
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
          id='course-description'
        />
        <Label text='Link do Curso' htmlFor='course-title' required />
        <Input 
          value={courseLink}
          onChange={(e) => setCourseLink(e.target.value)}
          id='course-link'
        />
        <Button 
          type='submit'
          label='Salvar'
          className='bg-cyan-800 text-white max-w-20 ml-auto mr-auto mt-2'
        />
      </Form>
    </Modal>
  )
}