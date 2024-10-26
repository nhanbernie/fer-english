import '../styles/WeeklyTimeTable.scss';

export default function Schedule() {
    return (
        <div className="schedule-container">
            <div className="schedule-header">
                <h2>Activities for Teacher Huỳnh Tấn Lực</h2>
                <div className="year-week-select">
                    <select>
                        <option value="2024">YEAR 2024</option>
                    </select>
                    <select>
                        <option value="13/10 to 19/10">WEEK 13/10 to 19/10</option>
                    </select>
                </div>
            </div>

            <table className="schedule-table">
                <thead>
                    <tr>
                        <th>Slot</th>
                        <th>MON</th>
                        <th>TUE</th>
                        <th>WED</th>
                        <th>THU</th>
                        <th>FRI</th>
                        <th>SAT</th>
                        <th>SUN</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td>13/10</td>
                        <td>14/10</td>
                        <td>15/10</td>
                        <td>16/10</td>
                        <td>17/10</td>
                        <td>18/10</td>
                        <td>19/10</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Slot 1</td>
                        <td>IETL 1 - P101</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>IETL 7 - P204</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Slot 2</td>
                        <td></td>
                        <td>IETL 1 - P102</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>IETL 1 - P105</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Slot 3</td>
                        <td>IETL 2 - P202</td>
                        <td></td>
                        <td>IETL 5 - P203</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>TOEIC 650 - P206</td>
                    </tr>
                    <tr>
                        <td>Slot 4</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>TOEIC 900 - P101</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Slot 5</td>
                        <td>TOEIC 800 - P104</td>
                        <td></td>
                        <td></td>
                        <td>TOEIC 550 - P202</td>
                        <td></td>
                        <td></td>
                        <td>IETL 5 - P205</td>
                    </tr>
                </tbody>
            </table>

            <div className="note-section">
                <p className="note">Note: Take attendance of students before each session</p>
                <p className="notification">Notification: Tuition deadline: 10th of every month</p>
            </div>
        </div>
    );
}
