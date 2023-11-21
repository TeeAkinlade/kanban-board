
const Columns = () => {

    const column = [
        {id: 1,  style: "bg-navyBlue", title: 'Requested Tasks'},
        {id: 2,  style: "bg-steelGray", title: 'To-Dos'},
        {id: 3,  style: "bg-burgundy", title: 'In Progress'},
        {id: 4,  style: "bg-forestGreen", title: 'Done'},
    ]

  return (
    <div className="my-12 mx-10">
        <h1 className="text-2xl font-semibold mb-8 text-center">KANBAN BOARD</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-10">
            {column.map(({id, style, title}) => (
                <div className={`min-h-[200px] ${style} px-2`} key={id}>
                    <p className="text-gray-600 bg-white rounded-md shadow-xl w-[200px] text-center font-medium mt-4 text-xl mx-auto">{title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Columns