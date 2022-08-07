<template>
  <div class="contact">
    <table>
        <tr>
            <th>Activity</th>
            <th>Name</th>
            <th>Contact Method</th>
            <th>Website</th>
        </tr>
        <tr>
            <td>Catering</td>
            <td>Chillfood</td>
            <td><a href="sandra.kleisa@chillfood.ch">sandra.kleisa@chillfood.ch</a></td>
            <td><a href="https://www.chillfood.ch/">https://www.chillfood.ch/</a></td>
        </tr>
        <tr>
            <td>Wedding Cakes</td>
            <td>Nils</td>
            <td><b>+41754126206</b></td>
            <td></td>
        </tr>
        <tr>
            <td>Drink delivery</td>
            <td>Portner Getränke</td>
            <td><b>+41318080010</b></td>
            <td><a href="https://portnerag.ch/">https://portnerag.ch/</a></td>
        </tr>
        <tr>
            <td>Photographer</td>
            <td>Andrea Rufener</td>
            <td><a href="hello@andrearufener.com">hello@andrearufener.com</a></td>
            <td><a href="https://andrearufener.com/">https://andrearufener.com/</a></td>
        </tr>
        <tr>
            <td>DJ</td>
            <td>Yvan</td>
            <td><a href="yvan@swissdj.ch">yvan@swissdj.ch</a> / <b>+41791998733</b></td>
            <td><a href="https://www.swissdj.ch/dj-yvan/">https://www.swissdj.ch/dj-yvan/</a></td>
        </tr>
        <tr>
            <td>Zimt&Zucker</td>
            <td>Zimt & Zucker</td>
            <td><a href="info@zimt-und-zucker.ch">info@zimt-und-zucker.ch</a></td>
            <td><a href="https://zimt-und-zucker.ch/">https://zimt-und-zucker.ch/</a></td>
        </tr>
        <tr>
            <td>Blütenreich</td>
            <td>Andrea Moya</td>
            <td><a href="Andrea.Moya@thun.ch">Andrea.Moya@thun.ch</a> / <b>+41795071573</b></td>
            <td><a href="https://www.bluetenreich.ch/de/">https://www.bluetenreich.ch/de/</a></td>
        </tr>
        <tr>
            <td>Make up & Hair</td>
            <td>Martina Krieg</td>
            <td><a href="info@hochzeitsfrisur-makeup.ch">info@hochzeitsfrisur-makeup.ch</a></td>
            <td><a href="http://www.artefrisura.ch/">http://www.artefrisura.ch/</a></td>
        </tr>
        <tr>
            <td>Pfarrer</td>
            <td>Simon Bärtschi</td>
            <td><a href="sbaertschi@kirchgemeindehilterfingen.ch">sbaertschi@kirchgemeindehilterfingen.ch</a></td>
            <td></td>
        </tr>
  </table>
  </div>
</template>

<style lang="scss" scoped>
.contact {
    overflow-x: auto;
    max-width: 80%;
    padding: 20px;
    margin: auto;

    table {
        border-collapse: collapse;
        width: 70%;
        margin: 0 auto;

        tr:nth-child(even) {
            background-color: #dddddd;
        }

        th {
            cursor: default;
        }

        td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
    }
}
</style>
