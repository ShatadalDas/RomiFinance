import { ApeSrc, AvalancheSrc, BtcSrc, DownArrowSrc, EthSrc, UsdcSrc } from "../../assets"
import "./SpecialCoinsSection.scss"

function SpecialCoinsSection() {
    return (
        <table className="special-coins-section">
            <tr>
                <th>
                    $ZLP Index Composition
                    <img src={AvalancheSrc} alt="" />
                </th>
            </tr>
            <tr>
                <td>
                    <table>
                        <tr>
                            <th>TOKEN</th>
                            <th>PRICE</th>
                            <th>POOL</th>
                            <th>WEIGHT</th>
                            <th>UTILIZATION</th>
                        </tr>
                        <tr>
                            <td>
                                <img src={ EthSrc } alt="" />
                                <div>
                                    <p>Ethereum</p>
                                    <p>ETH</p>
                                </div>
                                <img src={DownArrowSrc} alt="" className="down-arrow" />
                            </td>
                            <td>$1,766.07</td>
                            <td>$19</td>
                            <td>50.49% / 25.00%</td>
                            <td>0.00%</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={ BtcSrc } alt="" />
                                <div>
                                    <p>Wrapped Bitcoin</p>
                                    <p>WBTC</p>
                                </div>
                                <img src={DownArrowSrc} alt="" className="down-arrow" />
                            </td>
                            <td>$33,627.66</td>
                            <td>$0</td>
                            <td>50.00% / 25.00%</td>
                            <td>0.00%</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={ ApeSrc } alt="" />
                                <div>
                                    <p>ApeCoin</p>
                                    <p>APE</p>
                                </div>
                                <img src={DownArrowSrc} alt="" className="down-arrow" />
                            </td>
                            <td>$1.27</td>
                            <td>$0</td>
                            <td>50.00% / 25.00%</td>
                            <td>0.00%</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={ UsdcSrc } alt="" />
                                <div>
                                    <p>USD Coin</p>
                                    <p>USDC</p>
                                </div>
                                <img src={DownArrowSrc} alt="" className="down-arrow" />
                            </td>
                            <td>$1.00</td>
                            <td>$14</td>
                            <td>49.50% / 25.00%</td>
                            <td>0.00%</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
  )
}

export default SpecialCoinsSection