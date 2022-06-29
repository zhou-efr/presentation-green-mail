import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import bobMail from "../public/bob.png";
import aliceMail from "../public/alice.png";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Similarité', ''],
    datasets: [
        {
            label: '# of Votes',
            data: [99, 1],
            backgroundColor: [
                '#7FAF5D',
                '#fff',
            ],
            borderColor: [
                '#7FAF5D',
                '#fff',
            ],
            borderWidth: 1,
        },
    ],
};

export default function App() {
    const option = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        },
        animation: {
            duration: 1600,
        },
    }
    return (
        <div className="">
            <div className="fixed top-3 left-3 h-10 flex gap-20 items-center">
                <svg className={"h-8"} viewBox="0 0 79 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M78.3903 40.8712C78.3903 38.2321 78.1581 35.7267 77.76 33.2881H40.2695V48.3541H61.7353C60.7731 53.2981 57.9531 57.4739 53.7727 60.3133V70.3351H66.5792C74.0773 63.3533 78.3903 53.0643 78.3903 40.8712Z" fill="#7FAF5D"/>
                    <path d="M40.0822 80.0009C50.908 80.0009 59.963 76.4178 66.5788 70.3464L53.6813 60.3934C50.0727 62.7821 45.4951 64.2419 40.0822 64.2419C29.624 64.2419 20.7695 57.2415 17.5953 47.7861H4.29688V58.0378C10.8792 71.0431 24.4115 80.0009 40.0822 80.0009Z" fill="#6EAE6E"/>
                    <path d="M17.7181 47.6562C16.8776 45.2491 16.4405 42.6748 16.4405 40.0002C16.4405 37.3257 16.9112 34.7514 17.7181 32.3443V22.0137H4.33707C1.58017 27.4297 0 33.5144 0 40.0002C0 46.4861 1.58017 52.5708 4.33707 57.9868L17.7181 47.6562Z" fill="#8CC067"/>
                    <path d="M39.9103 15.759C45.796 15.759 51.0499 17.7828 55.2064 21.7309L66.5788 10.3844C59.6955 3.94805 50.6841 0 39.9103 0C24.3149 0 10.8476 8.95777 4.29688 21.9631L17.5314 32.2148C20.6904 22.7594 29.5023 15.759 39.9103 15.759Z" fill="#55A356"/>
                </svg>
                <h1 className={"text-sans font-semibold tracking-wide text-3xl"}>Trouver les similarités</h1>
            </div>
            <div className={"pt-10 w-screen h-screen flex justify-around"}>
                <div className={"w-1/2 ml-20 h-full flex flex-col justify-center items-center"}>
                    <img className={"h-1/2 p-4 object-contains"} src={"https://raw.githubusercontent.com/zhou-efr/presentation-green-mail/main/public/bob.png"} alt={"bob mail"}/>
                    <img className={"h-1/2 p-4 object-contains"} src={"https://raw.githubusercontent.com/zhou-efr/presentation-green-mail/main/public/alice.png"} alt={"alice mail"}/>
                </div>
                <div className={"w-1/2 h-full flex flex-col justify-center items-center"}>
                    <Doughnut data={data} style={{maxHeight: "200px"}} options={option}/>
                    <p className={"text-sans font-light tracking-wide text-center text-sm my-3"}>
                        Similaire à 99,688342 <br/>
                        (algorithm des cosines)
                    </p>
                </div>
            </div>
        </div>
    );
}
