import React from 'react';

function Food({name,picture}){

   //console.log(props);
return (
<div>
  <h2>i like { name }</h2>
  <img src={picture} />
</div>
  // return <h1>i like Potato</h1>
);
}

//foodilike변수에 빈 배열을 저장한다
const foodILike=[
  {
    name: 'Kimvchi',
    Image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
  },
  {
    name: 'samgyeposal',
    image:
    'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
  },
  {
    name: 'Bibimbap',
    image:
      'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb',
  },
  {
    name: 'Doncasu',
    image: 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
  },
  {
    name: 'Kimbap',
    image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
  },
];
  



function App() {
  return (
  <div>
  
     {/* <Food fav="kimchi"  />  */}
    {/* function food(props)로전달  */}
   {foodILike.map(dish=>(
   <Food name={dish.name} picture={dish.image} />))}   
  </div>
  );

}


export default App;
