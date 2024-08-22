import { useContext } from "react";
import ThemeContext from "./ThemeContext";


function MainContent(props) {
    const {theme, themeHandler} = useContext(ThemeContext);
    return(
        <div className="container"
            style={{
                width : '100vw',
                height : '100vh',
                backgroundColor : theme === 'light' ? 'white' : 'black',
                color : theme === 'light' ? 'black' : 'white'
            }}>
            <p>안녕하세요, 컨텍스트를 이용한 테마 변경 코드 입니다.</p>
            <button className='btn btn-primary' onClick={themeHandler}>Dark Or Light Theme Change</button>
        </div>
        
    );
}

export default MainContent;