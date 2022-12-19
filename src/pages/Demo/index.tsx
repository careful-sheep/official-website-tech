import { FC, useState, useEffect } from 'react';
import axios from 'axios';

const Demo: FC = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        console.log('12345');
        axios
            .post('http://127.0.0.1:3000/api/getDemoData', {
                content: '这是一个demo页面'
            })
            .then(res => {
                setContent(res.data?.data?.content);
            });
    }, []);

    return <div>{content ? content : '暂时没有内容'}</div>;
};

export default Demo;
