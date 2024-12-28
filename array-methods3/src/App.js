import logo from './logo.svg';
import './App.css';

function App() {
  let srhTeam=["Ishan Kishan","Heinrich Klaasen","Travis Head","Abhishek Sharma","Nitish Kumar Reddy","Pat Cummins","Jaydev Unadkat","Mohammad Shami"];
  return (
    <div className="App">
      <h1>Array Methods</h1>
      <hr></hr>
      <button type="button" 
      onClick={()=>{
        console.log(srhTeam);
        for(let i=0;i<srhTeam.length;i++){
          console.log(srhTeam[i]);
        }
        srhTeam.forEach((element,index)=>{
          console.log(`${index} ---> ${element}`);
        })
      }}>Array forEach</button>
      <button type="button" 
      onClick={()=>{
        let numberArr = [90,80,70,85,78,98,90,80,70,85,78,98,90,80,70,85,78,98,90,80,70,85,78,98,90,80,70,85,78,98,90,80,70,85,78,98];
        console.log(numberArr);
        let result=numberArr.every((element,index)=>{
          return element > 35;
        })
        if(result == true){
          console.log(`Student Passed`);
        }
        else{
          console.log(`Student Failed`);
        }
        let numberArr1 = [90,80,70,85,78,9,6,56,78,3,45,90,32];
        console.log(numberArr1);
        let result1=numberArr1.every((element,index)=>{
          return element > 35;
        })
        if(result1 == true){
          console.log(`Student Passed`);
        }
        else{
          console.log(`Student Failed`);
        }
      }}>Array every</button>
      <button type="button" 
      onClick={()=>{
        let numberArr=[78,90,56,76,85,50];
        console.log(numberArr);
        let result=numberArr.some((element,index)=>{
          return element < 35;
        })
        if(result == true){
          console.log(`Student Failed`);
        }
        else{
          console.log(`Student Passed`);
        }
      }}>Array some</button>
      <button type="button" 
      onClick={()=>{
        let numberArr=[10,20,30,50,70,75,48,38,90,65,43,23,11,22,36,2];
        console.log(numberArr);
        let result=numberArr.filter((element,index)=>{
          return element > 40;
        })
        console.log(result);
        let numberArr1=[10,20,30,50,70,75,48,38,90,65,43,23,11,22,36,2];
        console.log(numberArr1);
        let result1=numberArr1.filter((element,index)=>{
          return element %2 == 0;
        })
        console.log(result1);
        let numberArr2=[10,20,30,50,70,75,48,38,90,65,43,23,11,22,36,2];
        console.log(numberArr2);
        let result2=numberArr2.filter((element,index)=>{
          return element %2 != 0;
        })
        console.log(result2);
      }}>Array filter</button>
      <button type="button" 
      onClick={()=>{
        let numberArr=[11,55,35,67,89,56,47,90,87,56,34,89,90,65,80,78,89,99];
        console.log(numberArr);
        let result=numberArr.find((element,index)=>{
          return element > 60;
        })
        console.log(result);
        let result1=numberArr.findIndex((element,index)=>{
          return element > 60;
        })
        console.log(result1);
      }}>Array find/findIndex</button>
      <button type="button" 
      onClick={()=>{
        let numberArr=[11,55,35,67,89,56,47,90,87,56,34,89,90,65,80,78,89,99,33,22,10];
        console.log(numberArr);
        let result=numberArr.findLast((element,index)=>{
          return element > 60;
        })
        console.log(result);
        let result1=numberArr.findLastIndex((element,index)=>{
          return element > 60;
        })
        console.log(result1);
      }}>Array findLast/findLastIndex</button>
      <button type="button" 
      onClick={()=>{
        let alphaArr=["A","B","C","D","E","F","G","H"];
        console.log(alphaArr);
        let result=alphaArr.reduce((total,element,index)=>{
          return total +=element;
        })
        console.log(result);
        let alphaArr1=["A","B","C","D","E","F","G","H"];
        let result1=alphaArr1.reduceRight((total,element,index)=>{
          return total +=element;
        })
        console.log(result1);
      }}>Array reduce/reduceRight</button>
      <button type="button" 
      onClick={()=>{
        let numberArr=[2,4,5,7,8,9,11,33,56,79,90,567,789,987];
        console.log(numberArr);
        console.log(numberArr.sort());
        console.log(numberArr.sort((element,index)=>{
          return element-index;
        }))
      }}>Array sort callback function</button>
      <button type="button" 
      onClick={()=>{
        let actorsMovie=["Eega","Bahubali","Murari","Jalsa","Animal","Devara","Saalar","Arjun Reddy"];
        console.log(actorsMovie);
        let moviesArr=actorsMovie.map((element,index)=>{
          return `Hit Movies ${element}`;
        })
        console.log(moviesArr);
        let numberArr=[25,60,70,32,90,30];
        console.log(numberArr);
        let result=numberArr.map((element,index)=>{
          return element +10;
        })
        console.log(result);
      }}>Array Map</button>
    </div>
  );
}

export default App;
