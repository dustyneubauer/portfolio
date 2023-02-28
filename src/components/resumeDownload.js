export const onButtonClick = () => {
    fetch('neubauer_resume.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'neubauer_resume.pdf';
            alink.click();
        })
    })
}