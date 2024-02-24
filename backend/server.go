package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
)

func main() {
    http.HandleFunc("/api/data", dataHandler)

    fmt.Printf("Starting server at 8080\n")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        log.Fatalf("Server error: %s", err)
    }
}

func dataHandler(w http.ResponseWriter, r *http.Request) {
    log.Println("New request:", r.Method, r.URL.Path)
    
    if r.Method != http.MethodGet {
        http.Error(w, "Method is not supported.", http.StatusMethodNotAllowed)
        log.Println("Invalid method:", r.Method)
        return
    }
    
    file, err := os.Open("./catdata.json")
    if err != nil {
        log.Fatalf("Server error: %s", err)
        return
    }
    defer file.Close()
    
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Content-Type", "application/json")

    _, err = io.Copy(w, file)
    if err != nil {
        log.Fatalf("Server error: %s", err)
        return
    }
}