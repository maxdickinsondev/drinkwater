import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';

export default class Agua extends Component{

  constructor(props){
    super(props);
    this.state = {consumido:0, status:'Ruim', pct:0};

    this.beber = this.beber.bind(this);
    this.atualizar = this.atualizar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  limpar(){
    let s = this.state;

    s.consumido = 0;
    s.pct = 0;
    s.status = 'Ruim';

    this.setState(s);
  }

  atualizar(){
    let s = this.state;
    s.pct = ((s.consumido/2000)* 100);

    if (s.consumido >= 2000){
      s.status = 'Bom';
    }

    this.setState(s);
  }

  beber(){
    let s = this.state;
    s.consumido += 250;
    this.setState(s);

    this.atualizar();
  }

  render(){
    return(
      <View style={styles.body}>

        <ImageBackground style={styles.imagem} source={require('./images/water.png')}>
          <View style={styles.areaTexto}>
            <View>
              <Text style={styles.texto}> Meta </Text>
              <Text style={styles.info}> 2000ml </Text> 
            </View>

            <View>
              <Text style={styles.texto}> Consumido </Text>
              <Text style={styles.info}> {this.state.consumido}ml </Text>
            </View>

            <View>
              <Text style={styles.texto}> Status </Text>
              <Text style={styles.info}> {this.state.status} </Text>
            </View>
          </View>

          <View style={styles.areaPorcentagem}>
              <Text style={styles.textPorcentagem}> {this.state.pct.toFixed(1)}% </Text>
          </View>

          <View style={styles.areaBotao}>
            <TouchableOpacity style={styles.botao} onPress={this.beber}>
              <Text style={styles.textBotao}> Beber </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={this.limpar}>
              <Text style={styles.textBotao}> Limpar </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.programador}> Developer by: @Max_Dickinson_ </Text>

        </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    paddingTop:20
  },
  imagem:{
    flex:1,
    width:null
  },
  texto:{
    fontSize:18,
    fontWeight:'bold',
    color:'#483d8b'
  },
  areaTexto:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  info:{
    fontSize:14,
    textAlign:'center',
    color:'#00bfff'
  },
  botao:{
    width:120,
    height:35,
    margin:5,
    borderWidth:1,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00ced1'
  },
  textBotao:{
    fontSize:20,
    color:'#ffffff'
  },
  areaBotao:{
    marginTop:85,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center'
  },
  areaPorcentagem:{
    marginTop:230,
    alignItems:'center'
  },
  textPorcentagem:{
    fontSize:40
  },
  programador:{
    textAlign:'center',
    marginTop:70,
    fontStyle:'italic'
  }
});