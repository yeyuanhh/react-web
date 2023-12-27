import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
// import Layout from './Layout'
import { Button, Stack } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { GetChineseWeekName,GetHoursAgo } from '../../components/util.js';

const Users = (props) => {
    // 1.登录 去 Layout
    // const goLayoutHandler = () => {
    //     props.history.push('/layout')
    // }

    const [items, setItems] = useState([]);


    let a="22222";


    const showFile = async (e) => {
        console.info("uploading...");
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result);
            setItems(extractUsers(text));
        };
        reader.readAsText(e.target.files[0])
    }

    const extractUsers = (text) => {
        // console.log(text)
        var arr = text.split('\r\n')
            .filter(user => !!user);
        const users =
            arr.map(x => {
                const items = x.split('\t');
                const dt = parseInt(items[8]);
                return {               
                    source: items[0],
                    category: items[1],
                    itemId: items[2],
                    title: items[3],
                    url: items[4],
                    image: items[5],
                    provider_name: items[6],
                    provider_logo: items[7],
                    create_dt: GetHoursAgo(dt),
                    title_cn: items[9],
                }
            });

        return users;
    }

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000 * 60 * 60); // 每小时更新一次

        return () => {
            clearInterval(interval);
        };
    }, []);

    const year = currentDateTime.getFullYear();
    const month = currentDateTime.getMonth() + 1; // 月份从 0 开始，因此需要加 1
    const date = currentDateTime.getDate();
    const week = GetChineseWeekName(currentDateTime)

    return <Stack direction="vertical" gap={1}>

        {/* <Button as="a" variant="primary" onClick={uploadFile}>
                Button as link
            </Button>
            <Button as="a" variant="success">
                Button as link
            </Button> */}
        <div >
            <input type="file" onChange={(e) => showFile(e)} />
        </div>
        <hr />
        <div className='headline_title padding_left_right'>
            <span style={{ fontSize: 'larger' }}><b>{year + "/" + month + "/" + date}</b></span>
            <span style={{ fontSize: 'smaller' }}>&nbsp;&nbsp;&nbsp;{week}</span>
        </div>
        <div className='padding_left_right table_content'>{
            items.length === 0 ? <span>no record</span> :
                <Table striped bordered hover size="sm" className='news_tb'>
                    {/* <thead>
                            <tr>
                                <th>No.</th>
                                <th>Article title</th>
                                <th>Provier</th>
                            </tr>
                        </thead> */}

                    <tbody>
                        {items.map((student, index) => (
                            <tr data-index={index}>
                                <td className='middle'>{index + 1}</td>
                                <td>
                                    <span> {student.title}</span>
                                    <br />
                                    <span className='content_title_ch'>{student.title_cn}</span>
                                    <br />
                                    <img class="provide-logo" alt="" src={student.provider_logo} loading="lazy"/>
                                        
                                    <span className='provider'> {student.provider_name}</span>
                                    <span className='publish_dt'>&nbsp;&nbsp;{student.create_dt}</span>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
      }
        </div>
    </Stack>

};
export default Users