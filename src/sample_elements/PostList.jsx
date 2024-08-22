import Post from './Post';

/*
스타일 정의, 변수 정의
const styles = {

}

const posts = [
    { },
    { },
]

스크립트에서 배열을 순회할 때 for ~ 구문 대신에
map() 함수를 사용해서 새로운 배열을 반환
*/
const posts = [
    {
        writer : '임정섭',
        subject : '뷰보다 더 간단한 리액트',
    },
    {
        writer : '임섭순',
        subject : '컴포넌트로부터 엘리먼트 생성하는 것',
    },
    {
        writer : '강은종',
        subject : '리액트를 배웁시당',
    }
]
function PostList(props) {

    return (
        <div class='container'>
            {
                posts.map( (post) => {
                    return (
                        <Post writer={post.writer} subject={post.subject} />
                    )
                })
            }
        </div>
    );
}

export default PostList;