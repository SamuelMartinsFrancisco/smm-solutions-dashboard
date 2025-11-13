const usePostCourseHook = async (data) => {
  if (typeof data !== 'object') return {hasError: true, error: 'invalid data provided', data: []}
  const treatedData = JSON.stringify(data)

  try {
    const url = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/courses`;
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: treatedData
    });
    const response = await rawResponse.json();

    return response;
  } catch (error) {
    return { hasError: true, error: error.message, data: [] };
  }
}

export default usePostCourseHook;