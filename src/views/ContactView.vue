<template>
  <div class="contact">
    <h1>Contact Info</h1>
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
            <td>jerry.krebs@chillfood.ch</td>
            <td>https://www.chillfood.ch/</td>
        </tr>
        <tr>
            <td>Wedding Cakes</td>
            <td>Nils</td>
            <td>+41754126206</td>
            <td></td>
        </tr>
        <tr>
            <td>Drink delivery</td>
            <td>Portner Getränke</td>
            <td>+41318080010</td>
            <td>https://portnerag.ch/</td>
        </tr>
        <tr>
            <td>Photographer</td>
            <td>Andrea Rufener</td>
            <td>hello@andrearufener.com </td>
            <td>https://andrearufener.com/</td>
        </tr>
        <tr>
            <td>DJ</td>
            <td>Yvan</td>
            <td>yvan@swissdj.ch / +41791998733</td>
            <td>https://www.swissdj.ch/dj-yvan/</td>
        </tr>
        <tr>
            <td>Zimt&Zucker</td>
            <td>Zimt & Zucker</td>
            <td>info@zimt-und-zucker.ch</td>
            <td>https://zimt-und-zucker.ch/</td>
        </tr>
        <tr>
            <td>Blütenreich</td>
            <td>Andrea Moya</td>
            <td>Andrea.Moya@thun.ch / 41795071573</td>
            <td>https://www.bluetenreich.ch/de/</td>
        </tr>
        <tr>
            <td>Make up & Hair</td>
            <td>Martina Krieg</td>
            <td>info@hochzeitsfrisur-makeup.ch</td>
            <td>http://www.artefrisura.ch/</td>
        </tr>
        <tr>
            <td>Pfarrer</td>
            <td>Simon Bärtschi</td>
            <td>sbaertschi@kirchgemeindehilterfingen.ch</td>
            <td></td>
        </tr>
  </table>
  </div>
</template>

<style lang="scss" scoped>
.contact {
    table {
        border-collapse: collapse;
        width: 70%;
        margin: 0 auto;

        tr:nth-child(even) {
            background-color: #dddddd;
        }

        td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
    }
}
</style>
