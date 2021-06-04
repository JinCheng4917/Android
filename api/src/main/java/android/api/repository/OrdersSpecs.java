package android.api.repository;

import android.api.entity.Orders;
import android.api.entity.User;
import org.springframework.data.jpa.domain.Specification;

public class OrdersSpecs {
    public static Specification<Orders> containingStartPlace(String startPlace) {
        if (startPlace != null) {
            return (Specification<Orders>) (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.like(root.get("startPlace").as(String.class), String.format("%%%s%%", startPlace));
        } else {
            return Specification.where(null);
        }
    }

    public static Specification<Orders> containingEndPlace(String endPlace) {
        if (endPlace == null) {
            return Specification.where(null);
        }
        return (Specification<Orders>) (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.like(root.get("endPlace").as(String.class), String.format("%%%s%%", endPlace));
    }

    public static Specification<Orders> startWithOwner(User user) {
        if (user == null) {
            return Specification.where(null);
        }
        return (Specification<Orders>) (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.equal(root.get("user").as(User.class),  user);
    }

    public static Specification<Orders> isStatus(Long status) {
        if (status == null) {
            return Specification.where(null);
        }
        return (Specification<Orders>) (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.equal(root.get("status").as(Long.class),  status);
    }
}