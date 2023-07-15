import React, {  useState, FormEvent } from 'react';
import PageHeader from '../components/PageHeader';
import { useHistory } from 'react-router-dom';

import './style.css';
import Input from '../components/Input';

import warningIcon from '../assets/icons/warning.svg';
import Textarea from '../components/Textarea';
import Select from '../components/Select';
import api from '../services/api';



    
function Form() {
    const history = useHistory();         


    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
        
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    
        const [scheduleItems, setScheduleItems] = useState([
            {week_day:0, from:'', to:''}
        ]);

        function addNewScheduleItem() {
            setScheduleItems([
                ...scheduleItems,
                {week_day:0, from:'', to:''}
            ]);
        }

        function setScheduleItemValue(position: number, field: string, value: string) {
            const newArray = scheduleItems.map((scheduleItem, index) => {
                if (index === position) {
                    return {...scheduleItem, [field]: value};
                }
            return scheduleItem;
            });
            setScheduleItems(newArray);
        } 


        function handleCreateClass(e: FormEvent) {
            e.preventDefault();
            api.post('classes' , {
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost: Number(cost),
                schedule: scheduleItems
            }).then(() => {
                alert('Cadastro realizado com sucesso!');


                history.push('/');
            }).catch(() => {
                alert('Error no cadastro!');
            })
        }
        
    
    return(
        <div id="page-teacher-form" className='container'>
           <PageHeader 
            title="Que bom que você quer realizar o cadastro" 
            description="O primerio passo é preencher esse formulário de inscrição">
            
          </PageHeader>

          <main> 
            <form onSubmit={handleCreateClass}>
            <fieldset>
                <legend>Seus dados</legend>

                <Input name="name" label="Nome Completo" value={name} onChange={(e) => {setName(e.target.value)}} />
                <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => {setAvatar(e.target.value)}} />
                <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e) => {setWhatsapp(e.target.value)}} />
                <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => {setBio(e.target.value)}} />

 
            </fieldset>

            <fieldset>
                <legend>Sobre a aula</legend>

                <Select 
                    name="subject"
                    label="Matéria"
                    value= {subject}
                    onChange={(e) => {setSubject(e.target.value)}}
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



                <Input name="cost" label="Custo da hora por aula" value={cost} onChange={(e) => {setCost(e.target.value)}}/>
 
            </fieldset>
          
            <fieldset>
                <legend>Horários disponíveis  

                <button type="button" onClick={addNewScheduleItem}>
                    + Novo horário
                </button>
                </legend>

          {scheduleItems.map((scheduleItem, index) => {
            return(
                <div key={scheduleItem.week_day} className='schedule-item'>
                <Select 
                      name="week_day"
                      label="Dia da Semana"
                      value={scheduleItem.week_day}
                      onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                      options={[
                          { value: '0', label: 'Segunda-feira'},
                          { value: '1', label: 'Terça-feira'},
                          { value: '2', label: 'Quarta-feira'},
                          { value: '3', label: 'Quinta-feira'},
                          { value: '4', label: 'Sexta-feira'},
                          { value: '5', label: 'Sábado'},
                          { value: '6', label: 'Domingo'}
                      ]} />
                      <Input 
                        name="from"
                        label="Das"
                        type="time"
                        value={scheduleItem.from}
                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
/>
                      <Input
                        name="to"
                        label="Até"
                        type="time"
                        value={scheduleItem.to}
                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
/>
                </div>
            );
          })} 
            </fieldset>
          
          
          <footer>
            <p>
                <img src={warningIcon} alt="" />          
                Importante! <br />
                Preencha todos os dados
            </p>

            <button type="submit">
                Salvar cadastro
            </button>


          </footer>
          </form>
          </main>
     </div>
    )
}

export default Form;