import React from 'react';
import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';

import TeacherItem from '../../components/TeacherItem';


import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponiveis.">
                <form action="" id="search-teachers">
                <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            {value: 'Artes', label: 'Artes' },
                            {value: 'Biologia', label: 'Biologia' },
                            {value: 'Ciencias', label: 'Ciencias' },
                            {value: 'Matemática', label: 'Matemática' },
                            {value: 'Portugues', label: 'Portugues' },
                            {value: 'Quimica', label: 'Quimica' },
                            {value: 'Educação Fisica', label: 'Educação Fisica' },
                            {value: 'Historia', label: 'Historia' },
                            {value: 'Geografia', label: 'Geografia' },
                        ]}
                    />
                    <Select
                        name="week-da"
                        label="Dia da Semana"
                        options={[
                            {value: '0', label: 'Domingo' },
                            {value: '1', label: 'Segunda-feira' },
                            {value: '2', label: 'Terça-feira' },
                            {value: '3', label: 'Quarta-feira' },
                            {value: '4', label: 'Quinta-feira' },
                            {value: '5', label: 'Sexta-feira' },
                            {value: '6', label: 'Sábado' },
                           
                        ]}
                    />
                    <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                
            </main>
        </div>
    )
}

export default TeacherList;