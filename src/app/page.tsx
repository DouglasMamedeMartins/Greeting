const Page = () => {
  const fullTime = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
    hour12: false,
  }).format(new Date())

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="text-9xl">
        <span>{fullTime}</span>
      </div>
      <div className="text-5xl font-bold">
        {fullTime <= '12:00'
          ? 'Bom dia'
          : fullTime <= '18:00'
          ? 'Boa tarde'
          : 'Boa noite'}
      </div>
    </div>
  )
}

export default Page
