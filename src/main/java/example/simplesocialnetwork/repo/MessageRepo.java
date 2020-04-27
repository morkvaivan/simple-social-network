package example.simplesocialnetwork.repo;

import example.simplesocialnetwork.domain.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepo extends JpaRepository<Message, Long> {}
