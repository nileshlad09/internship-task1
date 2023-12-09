import React from 'react'
import Chart from 'react-apexcharts'
import '../Dashboard/dashboard.css'
const Graph = (props) => {
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


    let key = "gender";
    const gender = findOcc(data, key);
    var state = {
        options: {
            labels:
                [`${gender[0]?.gender}`, gender[1]?.gender]
        },
        series:
            [gender[0]?.occurrence, gender[1]?.occurrence]
    }


    return (
        <>
            <div className="donut">
                <div>
                    <p>Gender</p>
                </div>
                <div className="graph">
                    <Chart options={state.options} series={state.series} type="pie" width="100%" />
                </div>
                <div className='graphDetails'>
                    <div className='details'>
                        <p>TOTAL USERS = {data?.length}</p>
                    </div>
                    {
                        gender.map((g) => {
                            return <div className='details'>
                                <p>{g.gender} = {g.occurrence}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Graph