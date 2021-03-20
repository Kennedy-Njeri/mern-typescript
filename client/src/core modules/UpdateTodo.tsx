import { Form, Input, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import React, { ChangeEvent, useState, useEffect } from "react"
import Layout from './Layout';
import axios from 'axios'
import { ITodo } from '../typesTodo'
import { History } from 'history';
const baseUrl: string = 'http://localhost:5000'


interface serverResponse {
    todos: ITodo[]
}



interface Props1 {
    history: History,
    match: any
}

type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
}





const UpdateTodo: React.FC<Props1> = ({ history, match }) => {

    const id = match.params.id

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');



    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };



    const data1 = async () => {
        await axios.get<serverResponse>(baseUrl + '/todos', {
            headers: {
                "Content-Type": "application/json"
            }}).then(response => {
            //response.data
            console.log(response.data.todos)
        });
    }


    useEffect(() => {
        data1()
    }, [])

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const onFinish = (values) => {
        console.log("Success:", values)

        const {todo: { name, description }} = values

        console.log(name, description)



        //Can directly call props here

        const todo: Omit<ITodo, '_id'> = {
            name: name,
            description: description,
            status: false,
        }


        axios.post<ApiDataType>(baseUrl + '/add-todo',
            todo).then(response => {
            console.log(response.data)
            console.log(response.status)

        });


        history.push('/')
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };




    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };



    const UpdateForm = () => (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item label="Name" name={['todo', 'name']}>
                <Input value={name} placeholder="Enter name" onChange={onNameChange}/>
            </Form.Item>
            <Form.Item label="Description" name={['todo', 'description']}>
                <Input.TextArea value={description} placeholder="Enter Description" onChange={onDescriptionChange}/>
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )




    return (
        <Layout>

            {UpdateForm()}

        </Layout>
    );
}




export default UpdateTodo