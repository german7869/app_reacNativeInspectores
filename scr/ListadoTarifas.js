import React, {Component, useState, useEffect } from 'react';

import {StyleSheet,View, Text, Image,  useWindowDimensions,ScrollView} from 'react-native';
import { Table,Row,TableWrapper, Rows } from 'react-native-table-component';
import { DataTable } from 'react-native-paper'; 
import axios from 'axios';
import Logo from '../assets/logob.png';



const ListadoTarifas = () => {
  

  const {height} = useWindowDimensions();
  const [sigedata,setdata] = useState([]);
  

  useEffect(()=>{
    axios.get("http://192.168.1.6:8000/Listarifas/")
     .then((response)=>{
      console.log(response)
      setdata(response.data)
    }).catch(error => console.log(error));

  },[])

 
  return (
    <View style={styles.root}>
      <View style={styles.titulo}>
            <Image source={Logo}
             style={[styles.logo,{height: height * 0.13}]} resizeMode="contain" />
             <View >
                <Text> Inspector:  </Text>  
                <Text> Nombre inspecttor activo  </Text>  
                <Text> Listado de Precios </Text>     
             </View>   
             
       </View>
                    
        
            <DataTable style={styles.containerT}> 
                  <DataTable.Header > 
                    <DataTable.Title> Descripcion de tio de negocio</DataTable.Title> 
                    <DataTable.Title>codigo</DataTable.Title> 
                    <DataTable.Title>precio</DataTable.Title> 
                    
                  </DataTable.Header> 
                  <ScrollView>
                   {sigedata.map((data)=>{
                    return(    
                  
               
                  <DataTable.Row style={styles.row }>  
                    <DataTable.Cell style={{flex: 3}}>{data.nombre_tip}</DataTable.Cell> 
                    <DataTable.Cell>{data.codigo}</DataTable.Cell> 
                    <DataTable.Cell>{data.precio}</DataTable.Cell> 
                    
                  </DataTable.Row> 
              
           
              ); 
            })      
           }
           </ScrollView>
          </DataTable> 
        
       
        </View> 
    );
}

export default ListadoTarifas;

const styles = StyleSheet.create ({
  root: {
    backgroundcolor: '#f0000',
    width: '100%',
    borderColor: '#e8e88e8',
    borderWidth: 0.3,
    borderRadius: 10,
    padding: 0,    
    marginVertical: 1,
    flexDirection: 'column',
   },
  titulo: {
    flexDirection: 'row',
    fontSize: 19,
    alignItems: 'center',
   
  },
  logo: {
    width: '60%',
    maxWidth: 200,
    maxHeight: 200,
 },
  
  container: {  flex: 0, padding: 0, paddingTop: 3, backgroundColor: '#5444' },
  containerT: {  flex: 0, padding: 0, paddingTop: 3, backgroundColor: '#F23208' },
  header: { height: 50, backgroundColor: '#e345' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: {fontSize:15, backgroundColor: '#fff' },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: { 
     margin: 7,
     
  },
});



