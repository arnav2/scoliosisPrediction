export const handleFetchByAge = async (age: number) => {
    const response = await fetch(`http://localhost:5000/patients?age=${age}`);
    const data = await response.json();

    if (data.length > 0) {
        return data
    } else {
        return []
    }
};

export const handleFetchByName = async (name: string) => {
    const response = await fetch(`http://localhost:5000/patients?name=${name}`);
    const data = await response.json();

    if (data.length > 0) {
        return data   
    } else {
        return []
    }
};