<?php
  $firstName = $_POST["customerFirstName"];
  $lastName = $_POST["customerLastName"];
  $phoneNumber = $_POST["phoneNumber"];
  $phoneExtension = $_POST["phoneExtension"];
  $address = $_POST["address"];
  $city = $_POST["city"];
  $province = $_POST["province"];
  $postalCode = $_POST["postalCode"];

  $payMethod = $_POST["pay"];

  $centMk10 = $_POST["centMk10"];
  $centAVRE = $_POST["centAVRE"];
  $M4A3E8 = $_POST["M4A3E8"];
  $t3485 = $_POST["t3485"];
  $spitfire = $_POST["spitfire"];
  $p51mustang = $_POST["p51mustang"];
  $bf109g6 = $_POST["bf109g6"];
  $yak3 = $_POST["yak3"];

  $shippingCost = 0;
  $deliveryTime = 0;

  $taxArray = array(0.05, 0.12, 0.13, 0.15, 0.15, 0.05, 0.15, 0.05, 0.13, 0.15, 0.14975, 0.11, 0.05);

  $centMk10c = 55.95;
  $centAVREc = 150.00;
  $M4A3E8c = 35.50;
  $t3485c = 44.95;
  $spitfirec = 75.95;
  $p51mustangc = 66.50;
  $bf109g6c = 70.49;
  $yak3c = 60.95;

  $customerTotal = 0;

  //var_dump($_REQUEST);

  if($firstName == NULL){
    print("Your first name cannot be empty.");
  }
  if($lastName == NULL){
    print("Your last name cannot be empty.");
  }
  if($phoneNumber == NULL){
    print("Your phone number cannot be empty.");
  }
  if($address == NULL){
    print("Your address cannot be empty.");
  }
  if($city == NULL){
    print("Your city cannot be empty.");
  }
  if($province == NULL){
    print("Your province cannot be empty.");
  }
  if($postalCode == NULL){
    print("Your postal code cannot be empty.");
  }
  if($payMethod != "visa" && $payMethod != "cash order" && $payMethod != "interact"){
    print("You must chose a method of payment.");
  }

  function printOrder(){
    $total = 0;
    $thisTotal = 0;
    $taxRate = 0;
    $taxCost = 0;

    $centMk10 = $GLOBALS['centMk10'];
    $centAVRE = $GLOBALS['centAVRE'];
    $M4A3E8 = $GLOBALS['M4A3E8'];
    $t3485 = $GLOBALS['t3485'];
    $spitfire = $GLOBALS['spitfire'];
    $p51mustang = $GLOBALS['p51mustang'];
    $bf109g6 = $GLOBALS['bf109g6'];
    $yak3 = $GLOBALS['yak3'];

    $centMk10c = $GLOBALS['centMk10c'];
    $centAVREc = $GLOBALS['centAVREc'];
    $M4A3E8c = $GLOBALS['M4A3E8c'];
    $t3485c = $GLOBALS['t3485c'];
    $spitfirec = $GLOBALS['spitfirec'];
    $p51mustangc = $GLOBALS['p51mustangc'];
    $bf109g6c = $GLOBALS['bf109g6c'];
    $yak3c = $GLOBALS['yak3c'];

    echo("<table>");
    echo("<tr> 
            <td style=\"width: 600px\">Model Kit:</td>
            <td style=\"width: 100px\">Amount:</td>
            <td style=\"width: 100px\">Price (\$):</td>
          </tr>");

    if($centMk10 != 0){
      $total += $centMk10 * $centMk10c;
      $thisTotal = $centMk10 * $centMk10c;
      echo("<tr> 
              <td style=\"width: 600px\">British Army Centurion Mk.10</td>
              <td style=\"width: 100px\">$centMk10</td>
              <td style=\"width: 100px\">$thisTotal</td>
            </tr>");

    }
    if($centAVRE != 0){
      $total += $centAVRE * $centAVREc;
      $thisTotal = $centAVRE * $centAVREc;
      echo("<tr> 
              <td style=\"width: 600px\">British Army Centurion AVRE 165 (Gulf War)</td>
              <td style=\"width: 100px\">$centAVRE</td>
              <td style=\"width: 100px\">$thisTotal</td>
            </tr>");
    }
    if($M4A3E8 != 0){
      $total += $M4A3E8 * $M4A3E8c;
      $thisTotal = $M4A3E8 * $M4A3E8c;
      echo("<tr> 
              <td style=\"width: 600px\">United States Army Corps M4A3E8 Sherman</td>
              <td style=\"width: 100px\">$M4A3E8</td>
              <td style=\"width: 100px\">$thisTotal</td>
            </tr>");
    }
    if($t3485 != 0){
      $total += $t3485 * $t3485c;
      $thisTotal = $t3485 * $t3485c;
      echo("<tr> 
              <td style=\"width: 600px\">Soviet Red Army T-34/85 (1945)</td>
              <td style=\"width: 100px\">$t3485</td>
              <td style=\"width: 100px\">$thisTotal</td>
            </tr>");
    }
    if($spitfire != 0){
      $total += $spitfire * $spitfirec;
      $thisTotal = $spitfire * $spitfirec;
      echo("<tr> 
              <td style=\"width: 600px\">Royal Air Force Supermarine Spitfire Mk. IX</td>
              <td style=\"width: 100px\">$spitfire</td>
              <td style=\"width: 100px\">$thisTotal</td>
            </tr>");
    }
    if($p51mustang != 0){
      $total += $p51mustang * $p51mustang;
      $thisTotal = $p51mustang * $p51mustang;
      echo("<tr> 
              <td style=\"width: 600px\">United States Air Force North American P-51D Mustang</td>
              <td style=\"width: 100px\">$p51mustang</td>
              <td style=\"width: 100px\">$thisTotal</td>
            </tr>");
    }
    if($bf109g6 != 0){
      $total += $bf109g6 * $bf109g6;
      $thisTotal = $bf109g6 * $bf109g6;
      echo("<tr> 
              <td style=\"width: 600px\">Luftwaffe Messerschmitt Bf 109 G-6</td>
              <td style=\"width: 100px\">$bf109g6</td>
              <td style=\"width: 100px\">$thisTotal</td>
            </tr>");
    }
    if($yak3 != 0){
      $total += $yak3 * $yak3;
      $thisTotal = $yak3 * $yak3;
      echo("<tr> 
              <td style=\"width: 600px\">Soviet Air Force Yakovlev Yak-3</td>
              <td style=\"width: 100px\">$yak3</td>
              <td style=\"width: 100px\">$thisTotal</td>
            </tr>");
    }

    echo("<tr> 
            <td style=\"width: 500px\"></td>
            <td style=\"width: 200px\">Pre-tax total (\$):</td>
            <td style=\"width: 100px\">$total</td>
          </tr>");

    $taxRate = calculateTax();
    $taxRate = $taxRate * $total;
    

    if($total >= 0.01 && $total <= 25){
      $shippingCost = 3;
      $GLOBALS['deliveryDate'] = date("Y-m-d", strtotime("+1 day"));
    }
    elseif($total >= 25.01 && $total <= 50){
      $shippingCost = 4;
      $GLOBALS['deliveryDate'] = date("Y-m-d", strtotime("+1 day"));
    }
    elseif($total >=50.01 && $total <=75){
      $shippingCost = 5;
      $GLOBALS['deliveryDate'] = date("Y-m-d", strtotime("+3 days"));
    }
    else{
      $shippingCost = 6;
      $GLOBALS['deliveryDate'] = date("Y-m-d", strtotime("+4 days"));
    }

    $taxCost = $total + $taxRate + $shippingCost;

    echo("<tr> 
            <td style=\"width: 500px\"></td>
            <td style=\"width: 200px\">Tax (\$):</td>
            <td style=\"width: 100px\">$taxRate</td>
          </tr>");
    
    echo("<tr> 
            <td style=\"width: 500px\"></td>
            <td style=\"width: 200px\">Shipping Cost (\$):</td>
            <td style=\"width: 100px\">$shippingCost</td>
          </tr>");

    echo("<tr> 
            <td style=\"width: 500px\"></td>
            <td style=\"width: 200px\">With-tax total (\$):</td>
            <td style=\"width: 100px\">$taxCost</td>
          </tr>");

    echo("</table>");
  }

  function calculateTax(){
    $taxRate = 0;

    $province = $GLOBALS['province'];
    $taxArray = $GLOBALS['taxArray'];

    if($province == "Alberta"){
      $taxRate = $taxArray[0];
    }elseif($province == "British Columbia"){
      $taxRate = $taxArray[1];
    }elseif($province == "Manitoba"){
      $taxRate = $taxArray[2];
    }elseif($province == "New Brunswick"){
      $taxRate = $taxArray[3];
    }elseif($province == "Newfoundland And Labrador"){
      $taxRate = $taxArray[4];
    }elseif($province == "Northwest Territories"){
      $taxRate = $taxArray[5]; 
    }elseif($province == "Nova Scotia"){
      $taxRate = $taxArray[6]; 
    }elseif($province == "Nunavut"){
      $taxRate = $taxArray[7];
    }elseif($province == "Ontario"){
      $taxRate = $taxArray[8]; 
    }elseif($province == "Prince Edward Island"){
      $taxRate = $taxArray[9]; 
    }elseif($province == "Quebec"){
      $taxRate = $taxArray[10]; 
    }elseif($province == "Saskatchewan"){
      $taxRate = $taxArray[11]; 
    }elseif($province == "Yukon"){
      $taxRate = $taxArray[12]; 
    }else{
      $taxRate = 0;
    }
    return $taxRate;
  }

  echo("<h3>You order has been processed. Please verify the information.</h3><hr>");
  echo("<h3>Shipping To:</h3>");
  echo("<p>$firstName $lastName</p>");
  echo("<p>$address</p>");
  print("<p>$city, $province</p>");
  echo("<p>$postalCode</p>");
  echo("<br><hr><br>");
  echo("<h3>Order Information:</h3>");
  printOrder();
  echo("<br>");
  $deliveryDate = $GLOBALS['deliveryDate'];
  echo("<p>Estimated Delivery Date: $deliveryDate</p>");
?>
