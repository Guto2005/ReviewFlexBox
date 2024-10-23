import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './PessoaItemListStyle';

type Pessoa = {
  id: number;
  nome: string;
  idade: number;
};

export function PessoaItemList(props:Pessoa) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> nome: {props.nome} </Text>
            <Text> idade: {props.idade} id: {props.id} </Text>
        </View>
    );
}

export default PessoaItemList;
