import React from 'react';

const Progress = ({ progressList, onCancel }) => {

  return (
    <div className="progress-container">
      <h2 className='note-progress-title'><span className='total-notes-count'>2</span>Notes in progress</h2>
      {progressList && progressList.length > 0 ? (
        <table className='table'>
          <thead>
            <tr className='table-head-row'>
              <th className='table-heading'>Client</th>
              <th className='table-heading mobile-hide'>Type</th>
              <th className='table-heading'>ETA</th>
              <th className='mobile-hide'></th>
            </tr>
          </thead>
          <tbody>
            {progressList.map((progressItem) => (
              <tr key={progressItem.id} className='table-row'>
                <td className='td-40'>{progressItem.name}</td>
                <td className='td-30 mobile-hide'>{progressItem.type}</td>
                <td>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: `${progressItem.progress}%` }}></div>
                  </div>
                </td>
                <td className='mobile-hide'>
                  <img className='trash' onClick={() => onCancel(progressItem.id)} src="/images/trash.svg" alt="trash"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No files are currently being processed.</p>
      )}
    </div>
  );
}

export default Progress;
