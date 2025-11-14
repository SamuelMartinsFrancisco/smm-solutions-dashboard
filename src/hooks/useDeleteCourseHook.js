const useDeleteCourseHook = async (courseId) => {
  if (!courseId) return;

  try {
    const url = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/courses/${courseId}`;
    await fetch(url, {
      method: 'DELETE'
    });

    return { hasError: false };
  } catch (error) {
    //console.error('Some unkwnown error have happened:' + error.message);
    return { hasError: true, error: error.message };
  }
}

export default useDeleteCourseHook;