package ua.nure.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.nure.training.entity.Status;

import java.util.Optional;

public interface StatusRepository extends JpaRepository<Status, Integer> {
    Optional<Status> findByName(String name);
}
