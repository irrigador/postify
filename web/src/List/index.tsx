import React, { useState, FormEvent } from 'react';


import './style.css';
import PageHeader from '../components/PageHeader';
import Item, {Teacher} from '../components/Item';
import Input from '../components/Input';
import Select from '../components/Select';
import api from '../services/api';




function List() {
    const [teachers, setTeachers] = useState([]);
    
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState(''); 

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();
        
        const response = await api.get('classes',  {
            params: {
            subject,
            week_day,
            time,
            }
        });

        setTeachers(response.data);
    }

    return(
        <div id="page-teacher-list" className='container'>
           <PageHeader title="Este são os profissionais disponíveis.">
           <form id='search-teachers' onSubmit={searchTeachers}>
           <Select 
                    name="subject"
                    label="Matéria"
                    value={subject}
                    onChange={(e) => { setSubject(e.target.value)}}
                    options={[
                        { value: 'Item1', label: 'Item1'},
                        { value: 'Item2', label: 'Item2'},
                        { value: 'Item3', label: 'Item3'},
                        { value: 'Item4', label: 'Item4'},
                        { value: 'Item5', label: 'Item5'},
                        { value: 'Item6', label: 'Item6'},
                        { value: 'Item7', label: 'Item7'},
                        { value: 'Item8', label: 'Item8'},
                        { value: 'Item9', label: 'Item9'},
                        { value: 'Item10', label: 'Item10'}
                    ]} />

<Select 
                    name="week_day"
                    label="Dia da Semana"
                    value={week_day}
                    onChange={(e) => { setWeekDay(e.target.value)}}
                    options={[
                        { value: '0', label: 'Segunda-feira'},
                        { value: '1', label: 'Terça-feira'},
                        { value: '2', label: 'Quarta-feira'},
                        { value: '3', label: 'Quinta-feira'},
                        { value: '4', label: 'Sexta-feira'},
                        { value: '5', label: 'Sábado'},
                        { value: '6', label: 'Domingo'}
                    ]} />
            <Input type="time" name="time" label="Hora"  value={time} onChange={(e) => { setTime (e.target.value)}}/>

                    <button type="submit">Buscar </button>

           </form>
            </PageHeader>


        <main>
        {teachers.map((teacher: Teacher) => {
          return <Item key={teacher.id}  teacher={teacher} />;
        })} 
        </main>
        </div>
        )
}

export default List;