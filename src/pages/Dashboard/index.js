import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircularProgress } from '@material-ui/core';
import Chart from "react-google-charts";

import { 
    StyledMain, StyledGrid, StyledCard, StyledTitle, StyledTitleFooter, StyledLoading
 } from './styled';
import { load, setTitle } from './store/ducks';


export const Dashboard = ({ data, load, setTitle }) => {

    useEffect(() => {
        localStorage.getItem('access') && load();

        setTitle('Dashboard');
    }, [load, setTitle]);

    const options = {
        legend: "none",
        chartArea: { width: '90%' },
        bar: { groupWidth: "40" },
        fontSize: 8,
        animation: {
            duration: 1000,
            startup: true,
        },
    };

    return (
        data !== {} ? (
            <>
                <StyledMain container direction="row">
                    <StyledGrid item xs={12} md={6} lg={6}>
                        <StyledCard>
                            <StyledTitle>
                                Roteirizações por funcionário
                            </StyledTitle>

                            <Chart
                                chartType="ColumnChart"
                                data={data['employees']}
                                options={{
                                    ...options,
                                    vAxis: {
                                        logScale: false
                                    }
                                }}
                            />

                            <StyledTitleFooter>
                                *O gráfico está limitado aos 10 principais valores.
                            </StyledTitleFooter>
                        </StyledCard>
                    </StyledGrid>

                    <StyledGrid item xs={12} md={6} lg={6}>
                        <StyledCard>
                            <StyledTitle>
                                Roteirizações por cliente
                            </StyledTitle>

                            <Chart
                                chartType="BarChart"
                                data={data['clients']}
                                options={{
                                    ...options,
                                    hAxis: {
                                        logScale: false
                                    }
                                }}
                            />

                            <StyledTitleFooter>
                                *O gráfico está limitado aos 10 principais valores.
                            </StyledTitleFooter>
                        </StyledCard>
                    </StyledGrid>
                </StyledMain>
            </>
        ) : (
                <StyledLoading>
                    <CircularProgress style={{ margin: '8px 4px 4px 4px' }} />
                    <b>Carregando...</b>
                </StyledLoading>
            )
    );
};


const mapStateToProps = ({ dashboard }) => ({ data: dashboard.data });
const mapDispatchToProps = dispatch => bindActionCreators({ load, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
