import React, { useState, useEffect } from 'react';
import { View,Text,Image,useWindowDimensions,StyleSheet,ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper'; 
import axios from 'axios';
import Logo from '../assets/logob.png';
import { TextInput } from 'react-native-paper';



const ScreenInspector = () => {
  

  const {height} = useWindowDimensions();
  const [sigedata,setdata] = useState([]);
  
  

  useEffect(()=>{
    axios.get("http://192.168.1.6:8000/LisInforme/11")
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
                <Text > listado de informes </Text>  
             </View>   
                
         </View>
        <DataTable style={styles.containerT}> 
               <DataTable.Header style={styles.cabecerat}> 
                  <DataTable.Title >Contribuyente</DataTable.Title> 
                  <DataTable.Title>Nro</DataTable.Title> 
                  <DataTable.Title>Resculado</DataTable.Title> 
                  <DataTable.Title>Observacion</DataTable.Title> 
                    
                </DataTable.Header> 
                  <ScrollView>
                   {sigedata.map((data)=>{
                    return(    
                             
                    <DataTable.Row key={data.numero_informe} style={styles.row }>  
                      <DataTable.Cell>{data.id_establecimiento}</DataTable.Cell> 
                      <DataTable.Cell>{data.numero_informe}</DataTable.Cell> 
                      <DataTable.Cell>{data.resultado_informe}</DataTable.Cell> 
                      <DataTable.Cell>{data.observacion}</DataTable.Cell> 
                     
                    </DataTable.Row> 
                        
              ); 
            })      
           }
           </ScrollView>
          </DataTable> 
       
        </View> 
    );
}

export default ScreenInspector;

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
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: {fontSize:15, backgroundColor: '#fff' },
  cabecerat: {fontSize:15, color: 'white', },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: { 
     margin: 7,
     
  },
});



