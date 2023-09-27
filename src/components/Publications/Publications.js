import React from 'react';
import './Publications.css';
import SubmitForm from '../SubmitForm/SubmitForm';
import PubItem from '../PubItem/PubItem';

function Publications() {

  const [finalData, setFinalData] = React.useState([]);

  function setDataValue(data) {
    const dataArray = [data,...finalData]
    
    setFinalData(dataArray);
    console.log(finalData)
  }
  
  function deletePublication(data) {
    setFinalData((finalData) => finalData.filter((finalItem) =>  finalItem.id !== data.id))
    }

    

  return (
    <div className="publications">
     

    <SubmitForm onSubmit={setDataValue} />

    <div className='publications__wrap'>
    <h2 className='publications__title'>Ayuda que se necesita hoy:</h2>
    <ul className='publications__list'>

    {finalData.length===0? <p className='publications__warn'>Todavia no hay tareas publicadas</p>: ''}

    {
    finalData.map((data) => {
      data.id =  Math.floor(Math.random()*10000);

return (
  <PubItem name={data.name} order={data.order} title={data.title} contact={data.contact} price={data.price} key={data.id} onDelete={deletePublication} dataItem={data}/>

)

})}

    </ul>

    </div>
      
    </div>
  );
}

export default Publications;
