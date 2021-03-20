import React, { useEffect, useState } from "react"
import Layout from './Layout';
import { Table, Space, Button } from 'antd';
import axios from 'axios'
import { ITodo } from '../typesTodo'
import {Link} from "react-router-dom";
const baseUrl: string = 'http://localhost:5000'




interface serverResponse {
    todos: ITodo[]
}



type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
}



const Home = () => {

    const [todos1, setTodoList] = useState<ITodo[]>([]);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'action',
            render: (row) => {
                return <Space size="middle">
                    <a onClick={() => deleteTodo(row)}>Delete</a>
                </Space>
            },
        },
    ];
    

    const data1 = async () => {
         await axios.get<serverResponse>(baseUrl + '/todos', {
             headers: {
                 "Content-Type": "application/json"
             }}).then(response => {
              //response.data
             console.log(response.data.todos)
             setTodoList(response.data.todos);
        });
    }
    
    
    const deleteTodo = async (row) => {
        if (window.confirm('Are you sure')) {
            await axios.delete<ApiDataType>(`${baseUrl}/delete-todo/${row._id}`).then(response => {
                //response.data
                console.log(response.data.todos)
                setTodoList(response.data.todos);
            });
        }
    }

    
    useEffect(() => {
        data1()
    }, [])


    return (
        <Layout>

            <h4><Link to="/add-todo"><Button type="primary">Add Todo</Button></Link></h4>
            <>
            <Table columns={columns} dataSource={todos1} rowKey={todo => todo._id} pagination={false} />
            </>

        </Layout>
    );
}




export default Home


