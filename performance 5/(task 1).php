<?php
$string = "this is a demo lab.";
$vowels = ['a', 'e', 'i', 'o', 'u'];
$found_vowels = [];
$result = "";


for ($i = 0; $i < strlen($string); $i++) {
    $char = strtolower($string[$i]);
    if (in_array($char, $vowels)) {
        $found_vowels[] = $char;
    }
}

echo "Vowels found: " . implode(", ", $found_vowels) . "<br>";


for ($i = 0; $i < strlen($string); $i++) {
    $char = $string[$i];
    if (in_array(strtolower($char), $vowels)) {
        $result .= 'l';  
    } else {
        $result .= $char;  
    }
}


echo $result;



?>
