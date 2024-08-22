import Button from './Button';

function ConfirmDialog() {
    return (
        <div class='container'>
            <div>
                <p>확인 버튼을 눌러주세요.</p>
                <Button color='primary'>확인</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button color='danger'>취소</Button>
            </div>
        </div>
    );
}

export default ConfirmDialog;