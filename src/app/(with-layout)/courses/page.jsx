'use client'

import { useState, useContext } from "react";
import ContentListItem from "../../../components/ContentListItem";
import Header from "../../../components/Header";
import Button from '../../../components/Button'
import DeleteModal from "./DeleteModal";
import FormModal from "./FormModal";
import { mockCoursesList } from "../../../coursesMock";
import { ContentContext } from "../../../context/ContentContext";
import useDeleteCourseHook from '../../../hooks/useDeleteCourseHook';
import SkeletonContentListItem from '../../../components/Skeleton/SkeletonContentListItem';
import EmptyStateMessage from '../../../components/EmptyStateMessage';
import { PlusSquare } from "iconoir-react";

export default function Courses() {
  const [openForm, setOpenForm] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [formMode, setFormMode] = useState('create');
  const [courseSelectedId, setCourseSelectedId] = useState(undefined);
  const { courses } = useContext(ContentContext);

  const handleOpenForm = (mode, courseId) => {
    setFormMode(() => {
      if (courseId) setCourseSelectedId(courseId);
      setOpenForm(true);

      return mode;
    });
  }
  
  const handleOpenDeleteModal = (courseId) => {
    setCourseSelectedId(courseId);
    setOpenDeleteModal(true);
  }

  const onDelete = () => {
    useDeleteCourseHook(courseSelectedId).then(() => {
      courses.refreshData();
      setOpenDeleteModal(false);
    });
  }

  if (courses.loading) return <SkeletonContentListItem />
  if (courses.error) return <span>{'Houve um erro :('}</span>

  return (
    <div className='w-full p-5 max-lg:mt-7'>
      <Header 
        title='Cursos'
        subtitle='Aqui você pode gerenciar os cursos que vão aparecer em sua página'
        subtitleClasses='text-gray-600'
      />
      <div className='flex justify-center mb-10'>
        <Button 
          label='Novo Curso'
          className='bg-green-600 text-white font-bold'
          LeftIcon={() => <PlusSquare />}
          onClick={() => handleOpenForm('create')}
        />
      </div>
      <div className="pl-[5%] pr-[5%]">
        {
          !courses.data.length 
            ? <EmptyStateMessage text='Ainda não há cursos, que tal registrar um? :^)' />
            : courses.data.map((course) => (
              <ContentListItem
                id={course.id}
                title={course.title}
                description={course.description}
                imgAlt={`${course.title} image`}
                onEdit={() => handleOpenForm('edit', course.id)}
                onDelete={() => handleOpenDeleteModal(course.id)}
                key={course.id}
              />
            ))
        }
      </div>

      {
        openForm &&
          <FormModal
            onClose={() => setOpenForm(false)}
            mode={formMode}
            itemId={courseSelectedId}
          />
      }

      {
        openDeleteModal && 
          <DeleteModal 
            onClose={() => setOpenDeleteModal(false)}
            onDelete={onDelete}
          />
      }
    </div>
  );
}