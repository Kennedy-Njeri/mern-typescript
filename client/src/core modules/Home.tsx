import React, { useEffect, useState } from "react"
import Layout from './Layout';
import { Table, Tag, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { ITodo } from '../typesTodo'
const baseUrl: string = 'http://localhost:5000'


interface serverResponse {
    todos: ITodo[]
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
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>Delete</a>
                </Space>
            ),
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



    
    useEffect(() => {
        data1()
    }, [])


    return (
        <Layout>

            <>
            <Table columns={columns} dataSource={todos1} rowKey={todo => todo._id} pagination={false} />
            </>

        </Layout>
    );
}




export default Home


