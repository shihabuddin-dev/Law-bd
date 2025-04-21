import toast from "react-hot-toast";

export const getStoreAppoint = () => {
    const storedAppointSTR = localStorage.getItem('appoint')
    if (storedAppointSTR) {
        const storedAppointData = JSON.parse(storedAppointSTR)
        return storedAppointData;
    }
    else return [];
}

export const addAppointToLocalStorage = (id) => {
    const storedAppointData = getStoreAppoint()
    if (storedAppointData.includes(id)) {
        // toast.error('Already Added!')
        return false;
    }
    else {
        storedAppointData.push(id)
        const data = JSON.stringify(storedAppointData)
        localStorage.setItem('appoint', data)
        // toast.success('Appointment has been booked')
        return true
    }
}

export const removeAppointFromLocalStorage = (id) => {
    const storedAppointData = getStoreAppoint()
    const remainingAppointData = storedAppointData.filter(appoint => appoint !== id)
    const data = JSON.stringify(remainingAppointData)
    localStorage.setItem('appoint', data)
    toast.error('Appointment has been Canceled')
}