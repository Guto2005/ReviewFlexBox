import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './HomeStyle';
import PessoaItemList from './../components/PessoaItemList/PessoaItemList';

type Pessoa = {
  id: number;
  nome: string;
  idade: number;
};

let listapessoas: Pessoa[] = [
  { id: 1, nome: "Sara", idade: 23 },
  { id: 2, nome: "Fernando", idade: 33 },
  { id: 3, nome: "Maria", idade: 26 },
];

export function Home() {
  return (
    <ScrollView contentContainerStyle ={styles.container}>

      {listapessoas.map((pessoa) => (
        <PessoaItemList id={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} />
      ))}
    </ScrollView>
  );
}
