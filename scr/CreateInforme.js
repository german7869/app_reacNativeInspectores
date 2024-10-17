import React,{useState,useEffect} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions,ScrollView} from 'react-native';
import { Checkbox } from 'react-native-paper';
import axios from 'axios';


import CustomInput from '../CustomInput';
import CustomBoton from '../CustomBoton';
import CustomLabel from '../CustomLable';
import { Row } from 'react-native-table-component';

const CreateInforme = () => {
    
  const [Contribuyente,setcontribuyente] = useState('');
  const [nroinforme,setnroinforme] = useState('');
  const [IdInspector,setIdinspector] = useState('');
  const [observacion,setobservacion] = useState('');
  const [resultado,setresultado] = useState('');
  const [isSelected,setSelection] = useState(false);
  

 const opcionesdata = [{id: 1,descripcion: 'Conocimiento del us del Extintor',esvisto:false},
  {id: 2,descripcion: 'Gabinete contra incendios',esvisto: false},
  {id: 3,descripcion: 'Prueba de Presurisacion',esvisto: false},
  {id: 4,descripcion: 'Señalizacion de incendio',esvisto: false},
  {id: 5,descripcion: 'Luces de emergencia',esvisto: false},
  {id: 6,descripcion: 'Cables y Brekers Adecuados',esvisto: false},
  {id: 7,descripcion: 'Plan de Emergencia',esvisto: false},
  {id: 8,descripcion: 'Conocimiento del us del Extintor',esvisto: false},
  {id: 9,descripcion: 'instalaciones electricas imñprovisadas',esvisto: false},
  {id: 10,descripcion: 'Salida de emergenca',esvisto: false},
  {id: 11,descripcion: 'plan de contiencia',esvisto: false},
  {id: 12,descripcion: 'alarmas sonoras y visuales',esvisto: false},
  {id: 13,descripcion: 'boton de panico',esvisto: false} ];


const [opcionesC,setopciones] = useState(opcionesdata);

  const {height} = useWindowDimensions();
  
  CrearClick = () => {
    
    axios.post("http://192.168.1.6:8000/CreaInforme/", {
      
  //"nroInormeT": 0,
  //"observacion": "string",
  //"resultdo": "string",
  //"inspector": "string"  

      nroInormeT : nroinforme,
      observacion: observacion,
      resultdo: resultado,
      inspector: IdInspector
      })
      .then((response) => {
        console.log(response);
      });
      
      <text>aqui en clic</text>
  };
   
 
  return (
    <View style={styles.root}>
      <ScrollView>
      <CustomLabel
        text={"nombre Establecimiento"}
      />
      
      <CustomInput 
            placeholder="nro Informe" 
            value={Contribuyente} setValue={setnroinforme} 
            esclave={false} />

          <CustomInput 
             placeholder="ipoinspector id" 
            value={Contribuyente} setValue={setIdinspector} 
            esclave={false} />

      <CustomLabel
        text={"Cedula contirbuyente"}
      />
      <CustomInput 
      placeholder="id contribuenyente" 
      value={Contribuyente} setValue={setcontribuyente} 
      esclave={false} />
      <CustomLabel
        text={"Tipo de Extintor"}
      />


       
        {opcionesC.map((i)=>{
          return (
            <View style={styles.vistosC}>
              
              <Checkbox
                status={i.esvisto ? 'checked': 'unchecked'}
                onPress={()=> {
                  setopciones(i.esvisto) ;
                }}
              />
              <Text style={styles.opcionC}            >
                {i.descripcion}
              </Text>  
              
            </View>
          )
         } 
        )
       }



          <CustomInput 
            placeholder="Observacion" 
            value={Contribuyente} setValue={setobservacion} 
            esclave={false} />

          <CustomInput 
            placeholder="resulado" 
            value={Contribuyente} setValue={setresultado} 
            esclave={false} />




      <CustomBoton text="Grabar" 
           onPress={() => this.CrearClick()}/>

      </ScrollView>   
    </View>
  );
}


const styles = StyleSheet.create ({
  root: {
    margin: 15,
    padding: 0,
    paddingTop: 11
  },
  logo: {
    
    width: '80%',
    maxWitdth: 300,
    maxHeight: 140,
   },
   vistosC: {
    flexDirection: 'row',
    textAlign: 'justify',
        
   },
   opcionC: {
    justifyContent:'flex-start',
    
   
        
   },
});

export default CreateInforme;