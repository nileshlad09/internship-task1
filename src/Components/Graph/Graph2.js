import React from 'react'
import Chart from 'react-apexcharts'
import '../Dashboard/dashboard.css'
const Graph2 = (props) => {
    const { data } = props;

    function findOcc(data, key) {
        let arr2 = [];
        data.forEach((x) => {
            if (arr2.some((val) => { return val[key].replaceAll(' ', '').toLowerCase() === x[key].replaceAll(' ', '').toLowerCase() })) {
                arr2.forEach((k) => {
                    if (k[key].replaceAll(' ', '').toLowerCase() === x[key].replaceAll(' ', '').toLowerCase()) {
                        k["occurrence"]++
                    }
                })

            } else {
                let a = {}
                a[key] = x[key]
                a["occurrence"] = 1
                arr2.push(a);
            }
        })

        return arr2
    }


    let key = "employment";
    const gender = findOcc(data, key);
    var state = {
        options: {
            labels:
                [`${gender[0]?.employment}`, gender[1]?.employment, gender[2]?.employment ]
        },
        series:
            [gender[0]?.occurrence, gender[1]?.occurrence, gender[2]?.occurrence]
    }


    return (
        <>
            <div className="donut">
                <div>
                    <p>Employment <br /> Type</p>
                </div>
                <div className="graph">
                    <Chart options={state.options} series={state.series} type="pie" width="110%" />
                </div>
                <div className='graphDetails'>
                    <div className='details'>
                        <p>TOTAL USERS = {data?.length}</p>
                    </div>
                    {
                        gender.map((g,id) => {
                            return <div className='details' key={id}>
                                <p>{g.employment} = {g.occurrence}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Graph2