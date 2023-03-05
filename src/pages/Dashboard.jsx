import React, { useState, useEffect } from 'react'
import Header from '../components/partials/Header'
import Upload from '../components/Upload';
import Progress from '../components/Progress';

const Dashboard = () => {
    const [progressList, setProgressList] = useState([
        {
            id: (Date.now() * Math.random() * 9).toString(),
            name: 'client1',
            type: 'Progress note - 80 left',
            progress: 50,
        }
    ])

    const onCancel = (id) => {
        setProgressList(prevList => prevList.filter(item => item.id !== id));
    }
    

    const onUpload = (record) => {
        setProgressList((prevData) => [
            ...prevData,
            {...record, id: (Date.now() * Math.random() * 9).toString(), progress: 20}
        ]);
    }
  

    useEffect(() => {
      const interval = setInterval(() => {
        setProgressList((prevProgressState) =>
          prevProgressState.map((prevList) => {
            return {
              ...prevList,
              progress: prevList.progress < 100 ? prevList.progress + Math.random() * 20 : prevList.progress,
            };
          }).filter((item) => item.progress < 100)
        );
      }, 500);
  
      return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Header Component */}
            <Header />
            <div className='container dashboard'>
                <div className='first-section'>
                    <h2 className='name'>Hi, Maria</h2>
                    <img style={{ height: 24 }} src="/images/help.svg" alt="help" />
                </div>
                <h2 className='upload-title'>Upload your session’s recordings</h2>
                {/* Upload Component */}
                <Upload onUpload={onUpload}/>
                {/* Progress Component */}
                {progressList && progressList.length > 0 ?
                    <Progress progressList={progressList} onCancel={onCancel} />
                    :
                    null
                }
            </div>
        </>
    )
}

export default Dashboard;
