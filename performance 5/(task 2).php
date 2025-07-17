<?php
class Book {
    public $title;
    public $available;

    public function __construct($title, $available) {
        $this->title = $title;
        $this->available = $available;
    }

    public function isAvailable() {
        if ($this->available) {
            return "Available";
        } else {
            return "Not Available";
        }
    }
}


$book1 = new Book("Ami Topu", true);
$book2 = new Book("Harry Potter", false);
$book3 = new Book("Ema", true);
$book4 = new Book ("Ilabrito",false);
$book5 = new Book ("Rusha",false);


$books = [$book1, $book2, $book3, $book4, $book5];

foreach ($books as $book) {
    echo $book->title . " is " . $book->isAvailable() . "<br>";
}


?>
