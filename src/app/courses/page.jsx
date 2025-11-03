'use client'

import ContentListItem from "@/components/ContentListItem";
import Header from "@/components/Header";
import Button from '@/components/Button'
import { mockCoursesList } from "@/coursesMock";
import { PlusSquare } from "iconoir-react";
import FormModal from "./FormModal";
import { useState } from "react";

export default function Courses() {
  const [openForm, setOpenForm] = useState(false);
  const [formMode, setFormMode] = useState('create');
  const [courseSelectedId, setCourseSelectedId] = useState(undefined);

  const handleOpenForm = (mode, courseId) => {
    setFormMode(() => {
      if (courseId) setCourseSelectedId(courseId);
      setOpenForm(true);

      return mode;
    });
  }

  return (
    <div className='w-full p-5'>
      <Header 
        title='Cursos'
        subtitle='Aqui você pode gerenciar os cursos que vão aparecer em sua página'
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
          mockCoursesList.map((course) => (
            <ContentListItem
              id={course.id}
              title={course.title}
              description={course.description}
              imgAlt={`${course.title} image`}
              onEdit={() => handleOpenForm('edit', course.id)}
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
    </div>
  );
}