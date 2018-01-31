package com.huibozhixin.jhipstersmartadmin.repository;

import com.huibozhixin.jhipstersmartadmin.domain.UserAnswerStatistics;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the UserAnswerStatistics entity.
 */
@SuppressWarnings("unused")
@Repository
public interface UserAnswerStatisticsRepository extends JpaRepository<UserAnswerStatistics, Long> {

}
