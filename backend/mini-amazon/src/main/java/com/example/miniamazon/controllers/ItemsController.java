package com.example.miniamazon.controllers;

import com.example.miniamazon.model.Item;
import com.example.miniamazon.model.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/items")
public class ItemsController {

    @Autowired
    private ItemRepository itemRepository;

    @GetMapping("/all")
    public ResponseEntity<List<Item>>getAllItems(){
        return ResponseEntity.ok(itemRepository.findAll());
    }

    @GetMapping("/")
    public ResponseEntity<Optional<Item>> getItem(@RequestParam Long id){
        return ResponseEntity.ok(itemRepository.findById(id));
    }
}
