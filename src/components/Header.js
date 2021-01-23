import React from 'react';
import './Header.css'


// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png' alt='Netflix' />
                </a>
            </div>
            <div className='header--user'>
                <a href='/'>
                    <img src='https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png' alt='Usuário' />
                </a>
            </div>
        </header>
    );
}