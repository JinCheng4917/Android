package android.api.repository;

import android.api.entity.Orders;
import android.api.entity.User;
import com.sun.istack.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.util.Assert;

public interface OrderRepository extends PagingAndSortingRepository<Orders, Long>, JpaRepository<Orders, Long>, JpaSpecificationExecutor {


    Page<Orders> findAllByStatus(int status, Pageable pageable);

    Page<Orders> findAllByUser(User theDriver, Pageable pageable);


    default Page queryAll(String startPlace, String endPlace, @NotNull Pageable pageable) {
        Assert.notNull(pageable, "传入的Pageable不能为null");

        Specification<Orders> specification = OrdersSpecs.containingStartPlace(startPlace)
                .and(OrdersSpecs.containingEndPlace(endPlace)).and(OrdersSpecs.isStatus(0L));
        return this.findAll(specification, pageable);
    }

    default Page userQueryAll(Long status, User user, String startPlace, String endPlace, @NotNull Pageable pageable) {
        Assert.notNull(pageable, "传入的Pageable不能为null");

        Specification<Orders> specification = OrdersSpecs.containingStartPlace(startPlace)
                .and(OrdersSpecs.containingEndPlace(endPlace))
                .and(OrdersSpecs.isStatus(status)).and(OrdersSpecs.startWithOwner(user));
        return this.findAll(specification, pageable);
    }


}
