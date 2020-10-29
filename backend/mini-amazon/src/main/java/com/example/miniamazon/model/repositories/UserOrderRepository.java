package com.example.miniamazon.model.repositories;

import com.example.miniamazon.model.UserOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserOrderRepository extends JpaRepository<UserOrder,Long> {

}
