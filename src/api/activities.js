export async function postData(url = '', data = {"name":"abdellah","desc":"hello world","pictures":'',}) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log('Response data:', responseData);
        return responseData;
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

// Example usage: Posting data to a JSON Server
const data = {
    title: 'New Post',
    body: 'This is the body of the new post.'
};

postData('http://localhost:3000/posts', data);
